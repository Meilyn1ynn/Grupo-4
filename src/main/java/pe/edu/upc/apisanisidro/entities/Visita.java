package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Table
@Entity(name = "Visita")
public class Visita {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVisita;

    @ManyToOne
    @JoinColumn(name = "Us_inquilino_id", nullable = false)
    private Usuarios inquilino;

    @ManyToOne
    @JoinColumn(name = "Pr_id", nullable = false)
    private Propiedad propiedad;

    @Column(name = "Vi_fecha", nullable = false)
    private LocalDateTime fecha;

    @Column(name = "Vi_estado", length = 50)
    private String estado;

    public Visita(int idVisita, Usuarios inquilino, Propiedad propiedad, LocalDateTime fecha, String estado) {
        this.idVisita = idVisita;
        this.inquilino = inquilino;
        this.propiedad = propiedad;
        this.fecha = fecha;
        this.estado = estado;
    }

    public Visita() {

    }

    public int getIdVisita() {return idVisita;}

    public void setIdVisita(int idVisita) {
        this.idVisita = idVisita;
    }

    public Usuarios getInquilino() {
        return inquilino;
    }

    public void setInquilino(Usuarios inquilino) {
        this.inquilino = inquilino;
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

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
