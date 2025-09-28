package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Table
@Entity (name = "Usuarios")
public class Usuarios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUsuario;

    @Column(name = "Us_nombre", nullable = false)
    private String nombreUsuario;

    @Column(name = "Us_apellido", nullable = false)
    private String apellidoUsuario;

    @Column(name = "Us_dni", nullable = false, unique = true)
    private String dniUsuario;

    @Column(name = "Us_correo", nullable = false, unique = true)
    private String correoUsuario;

    @Column(name = "Us_contrasena", nullable = false)
    private String contrasenaUsuario;

    @Column(name = "Us_edad")
    private Integer edadUsuario;

    @Column(name = "Us_foto")
    private String fotoUsuario;

    @Column(name = "Us_estado_civil")
    private String estadoCivilUsuario;

    @Column(name = "Us_descripcion", length = 1000)
    private String descripcionUsuario;

    public Usuarios(int idUsuario, String nombreUsuario, String apellidoUsuario, String dniUsuario, String correoUsuario, String contrasenaUsuario, Integer edadUsuario, String fotoUsuario, String estadoCivilUsuario, String descripcionUsuario) {
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.dniUsuario = dniUsuario;
        this.correoUsuario = correoUsuario;
        this.contrasenaUsuario = contrasenaUsuario;
        this.edadUsuario = edadUsuario;
        this.fotoUsuario = fotoUsuario;
        this.estadoCivilUsuario = estadoCivilUsuario;
        this.descripcionUsuario = descripcionUsuario;
    }

    public Usuarios() {return;}

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getApellidoUsuario() {
        return apellidoUsuario;
    }

    public void setApellidoUsuario(String apellidoUsuario) {
        this.apellidoUsuario = apellidoUsuario;
    }

    public String getDniUsuario() {
        return dniUsuario;
    }

    public void setDniUsuario(String dniUsuario) {
        this.dniUsuario = dniUsuario;
    }

    public String getCorreoUsuario() {
        return correoUsuario;
    }

    public void setCorreoUsuario(String correoUsuario) {
        this.correoUsuario = correoUsuario;
    }

    public String getContrasenaUsuario() {
        return contrasenaUsuario;
    }

    public void setContrasenaUsuario(String contrasenaUsuario) {
        this.contrasenaUsuario = contrasenaUsuario;
    }

    public Integer getEdadUsuario() {
        return edadUsuario;
    }

    public void setEdadUsuario(Integer edadUsuario) {
        this.edadUsuario = edadUsuario;
    }

    public String getFotoUsuario() {
        return fotoUsuario;
    }

    public void setFotoUsuario(String fotoUsuario) {
        this.fotoUsuario = fotoUsuario;
    }

    public String getEstadoCivilUsuario() {
        return estadoCivilUsuario;
    }

    public void setEstadoCivilUsuario(String estadoCivilUsuario) {
        this.estadoCivilUsuario = estadoCivilUsuario;
    }

    public String getDescripcionUsuario() {
        return descripcionUsuario;
    }

    public void setDescripcionUsuario(String descripcionUsuario) {
        this.descripcionUsuario = descripcionUsuario;
    }
}