class NewData {
  constructor({ titulo, descripcion, imagen, fecha, id }) {
    // Provide default values if properties are undefined or null
    this.titulo = titulo || '';
    this.descripcion = descripcion || '';
    this.imagen = imagen || '';
    this.fecha = fecha || null; // You can adjust the default value for 'fecha' as needed
    this.id = id || '';
  }
}

export default NewData;
