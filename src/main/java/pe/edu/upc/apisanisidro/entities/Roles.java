package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Roles")
public class Roles {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int idRol;

        @Column(name = "Rol_nombre", length = 40, nullable = false)
        private String nombreRol;

    public Roles(int idRol, String nombreRol) {
        this.idRol = idRol;
        this.nombreRol = nombreRol;
    }

    public Roles() {

    }

    public int getIdRol() {
        return idRol;
    }

    public void setIdRol(int idRol) {
        this.idRol = idRol;
    }

    public String getNombreRol() {
        return nombreRol;
    }

    public void setNombreRol(String nombreRol) {
        this.nombreRol = nombreRol;
    }
}
