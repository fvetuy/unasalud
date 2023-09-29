class NewData {
  constructor({ titulo = '', descripcion = '', imagen = '', fecha, id = '' }) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.fecha = fecha;
    this.id = id;
  }
}

export default NewData;
