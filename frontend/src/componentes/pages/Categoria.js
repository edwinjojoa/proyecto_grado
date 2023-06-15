import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function Categoria() {
  const [categorias, setCategoria] = useState([]);
  const [categoria, setCategoriaInput] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [creado, setCreado] = useState('');
  const [editado, setEditado] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoriaToDelete, setCategoriaToDelete] = useState(null);
  const [categoriaId, setCategoriaId] = useState(null); // Nuevo estado para almacenar el ID de la categoría a editar
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    cargarCategorias();
  }, []);

  function handleModalOpen(id) {
    if (id) {
      const categoria = categorias.find((c) => c.id === id);  
      if (categoria) {
        setCategoria(categoria.categoria);
        setDescripcion(categoria.descripcion);
        setCreado(categoria.creado);
        setEditado(categoria.editado);
        setCategoriaId(id);
        setShowModal(true);
      }
    } else {
      resetForm();
      setShowModal(true);
    }
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handleCancelar() {
    resetForm();
    setShowModal(false);
  }

  const cargarCategorias = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/categorias/');
      setCategoria(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const buscarCategoria = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8081/api/categorias/?search=${query}`);
      setCategoria(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const crearCategoria = async (e) => {
    e.preventDefault();
    try {
      const nuevaCategoria = {
        categoria: categoria,
        descripcion: descripcion,
        creado: creado,
        editado: editado,
      };
      await axios.post('http://localhost:8081/api/categorias/', nuevaCategoria);
      cargarCategorias();
      resetForm();
      handleModalClose();
    } catch (error) {
      console.error(error);
    }
  };

  const editarCategoria = async (e) => {
    e.preventDefault();
    try {
      const categoriaModificada = {
        categoria: categoria,
        descripcion: descripcion,
        creado: creado,
        editado: editado,
      };
      await axios.put(`http://localhost:8081/api/categorias/${categoriaId}/`, categoriaModificada);
      cargarCategorias();
      resetForm();
      handleModalClose();
    } catch (error) {
      console.error("error de conexión", error);
    }
  };

  const eliminarCategoria = (categoria) => {
    setCategoriaToDelete(categoria);
    setShowDeleteModal(true);
  };

  const handleEliminarConfirmado = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/categorias/${id}/delete/`);
      cargarCategorias();
      setShowDeleteModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setCategoria('');
    setDescripcion('');
    setCreado('');
    setEditado('');
    setCategoriaId(null);
  };

  return (
    <div className="container">
      <div className="container">
        <h1 className="mt-4 text-center h2">LISTA DE CATEGORÍA</h1> <br />
        
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            handleModalOpen();
            setCategoriaId(null);
          }}
        >
          Crear Categoría
        </button>
        <br /><br /><br />
        <form className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar categoría"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => buscarCategoria(searchQuery)}
              >
                Buscar
              </button>
            </div>
          </div>
        </form>
        <br /><br />
        <table className="table table-responsive-sm table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.categoria}</td>
                <td>{categoria.descripcion}</td>
                <td>
                  <div className="d-flex flex-column flex-sm-row">
                    <button className="btn btn-primary mb-2 mb-sm-0 mr-sm-2" onClick={() => handleModalOpen(categoria.id)}>Editar</button>
                    <button className="btn btn-danger" onClick={() => eliminarCategoria(categoria)}>Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {categoriaId ? 'Editar Categoría' : 'Crear Categoría'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={categoriaId ? editarCategoria : crearCategoria}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Categoría"
                value={categoria}
                onChange={(e) => setCategoriaInput(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              />
            </div>
            <Button variant="secondary" onClick={handleCancelar}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de que deseas eliminar la categoría?</p>
          <p>Nombre: {categoriaToDelete?.categoria}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => handleEliminarConfirmado(categoriaToDelete?.id)}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Categoria;
