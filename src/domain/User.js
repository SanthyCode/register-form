export class User {
  constructor(data = {}) {
    this.pais = data.pais || '';
    this.genero = data.genero || '';
    this.primerNombre = data.primerNombre || '';
    this.segundoNombre = data.segundoNombre || '';
    this.fechaNacimiento = data.fechaNacimiento || '';
    this.tipoDocumento = data.tipoDocumento || '';
    this.numeroDocumento = data.numeroDocumento || '';
    this.fotoFrente = data.fotoFrente || null;
    this.fotoReverso = data.fotoReverso || null;
    this.correo = data.correo || '';
    this.contrasena = data.contrasena || '';
    this.confirmContrasena = data.confirmContrasena || '';
    this.telefono = data.telefono || '';
    this.celular = data.celular || '';
    this.direccion = data.direccion || '';
    this.codigoPostal = data.codigoPostal || '';
  }

  isAgeValid() {
    if (!this.fechaNacimiento) return false;
    const birthDate = new Date(this.fechaNacimiento);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 18;
    }
    return age >= 18;
  }

  validateStep1() {
    return this.pais && this.genero && this.primerNombre && this.segundoNombre &&
           this.fechaNacimiento && this.isAgeValid() && this.tipoDocumento &&
           this.numeroDocumento.length >= 5 && /^\d+$/.test(this.numeroDocumento) &&
           this.fotoFrente && this.fotoReverso;
  }

  validateStep2() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.correo) && this.contrasena &&
           this.confirmContrasena === this.contrasena && this.telefono && this.celular;
  }

  validateStep3() {
    return this.direccion && this.codigoPostal;
  }
}