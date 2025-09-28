package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Table
@Entity(name = "Propiedad")
public class Propiedad {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int idPropiedad;

        @Column(name = "Pr_titulo", length = 150, nullable = false)
        private String titulo;

        @Column(name = "Pr_descripcion", columnDefinition = "TEXT")
        private String descripcion;

        @Column(name = "Pr_direccion", length = 255)
        private String direccion;

        @Column(name = "Pr_distrito", length = 100)
        private String distrito;

        @Column(name = "Pr_precio", nullable = false)
        private double precio;

        @Column(name = "Pr_habitaciones")
        private int habitaciones;

        @Column(name = "Pr_fecha_publicacion")
        private LocalDateTime fechaPublicacion;

        @ManyToOne
        @JoinColumn(name = "idUsuario", nullable = false)
        public Usuarios usuario;

    public Propiedad(int idPropiedad, String titulo, String descripcion, String direccion, String distrito, double precio, int habitaciones, LocalDateTime fechaPublicacion, Usuarios usuario) {
        this.idPropiedad = idPropiedad;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.distrito = distrito;
        this.precio = precio;
        this.habitaciones = habitaciones;
        this.fechaPublicacion = fechaPublicacion;
        this.usuario = usuario;
    }

    public Propiedad() {

    }

    public int getIdPropiedad() {return idPropiedad;}

    public void setIdPropiedad(int idPropiedad) {
        this.idPropiedad = idPropiedad;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getDistrito() {
        return distrito;
    }

    public void setDistrito(String distrito) {
        this.distrito = distrito;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public int getHabitaciones() {
        return habitaciones;
    }

    public void setHabitaciones(int habitaciones) {
        this.habitaciones = habitaciones;
    }

    public LocalDateTime getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(LocalDateTime fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }
}
