class NewData {
  constructor({ titulo, descripcion, imagenURL, fecha, id }) {
    this.titulo = titulo || '';
    this.descripcion = descripcion || '';
    this.imagenURL = imagenURL || '';
    this.fecha = fecha || null; 
    this.id = id || '';
  }
}

export default NewData;