class ActivityData {
  constructor({titulo, descripcion, imagenURL, fecha, categoria}) {
      this.titulo = titulo || '';
      this.descripcion = descripcion || '';
      this.imagenURL = imagenURL || '';
      this.fecha = fecha || null;
      this.categoria = categoria || 'educacion';
  }
}
  
export default ActivityData;