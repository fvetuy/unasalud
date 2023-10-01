class NewData {
  constructor({ titulo, descripcion, imagenURL, fecha, id }) {
    // Provide default values if properties are undefined or null
    this.titulo = titulo || '';
    this.descripcion = descripcion || '';
    this.imagenURL = imagenURL || '';
    this.fecha = fecha || null; // You can adjust the default value for 'fecha' as needed
    this.id = id || '';
  }
}

export default NewData;
