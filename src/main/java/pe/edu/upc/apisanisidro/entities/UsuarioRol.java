package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "usuario_roles")
public class UsuarioRol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUsuarioRol;

    @ManyToOne
    @JoinColumn(name = "Us_id", nullable = false)
    private Usuarios usuario;

    @ManyToOne
    @JoinColumn(name = "Rol_id", nullable = false)
    private Roles rol;

    public UsuarioRol(int idUsuarioRol, Usuarios usuario, Roles rol) {
        this.idUsuarioRol = idUsuarioRol;
        this.usuario = usuario;
        this.rol = rol;
    }

    public UsuarioRol() {

    }

    public int getIdUsuarioRol() {return idUsuarioRol;}

    public void setIdUsuarioRol(int idUsuarioRol) {
        this.idUsuarioRol = idUsuarioRol;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }

    public Roles getRol() {
        return rol;
    }

    public void setRol(Roles rol) {
        this.rol = rol;
    }
}
