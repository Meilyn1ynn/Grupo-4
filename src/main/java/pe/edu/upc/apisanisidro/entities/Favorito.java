package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "favoritos")
public class Favorito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Fa_id")
    private int idFavorito;

    @ManyToOne
    @JoinColumn(name = "Us_id", nullable = false)
    private Usuarios usuario;

    @ManyToOne
    @JoinColumn(name = "Pr_id", nullable = false)
    private Propiedad propiedad;

    @Column(name = "Fa_fecha")
    private LocalDateTime fecha;

    public Favorito(int idFavorito, Usuarios usuario, Propiedad propiedad, LocalDateTime fecha) {
        this.idFavorito = idFavorito;
        this.usuario = usuario;
        this.propiedad = propiedad;
        this.fecha = fecha;
    }

    public Favorito() {

    }

    public int getIdFavorito() {
        return idFavorito;
    }

    public void setIdFavorito(int idFavorito) {
        this.idFavorito = idFavorito;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }

    public Propiedad getPropiedad() {
        return propiedad;
    }

    public void setPropiedad(Propiedad propiedad) {
        this.propiedad = propiedad;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }
}
