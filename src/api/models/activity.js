class ActivityData {
  constructor({titulo, descripcion, imagenURL, fecha, categoria, id}) {
      this.titulo = titulo || '';
      this.descripcion = descripcion || '';
      this.imagenURL = imagenURL || '';
      this.fecha = fecha || null;
      this.categoria = categoria || 'educacion';
      this.id = id || '';
  }
}
  
export default ActivityData;