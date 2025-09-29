package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "soportes")
public class Soporte {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idSoporte;

    @ManyToOne
    @JoinColumn(name = "Us_id", nullable = false)
    private Usuarios usuario;

    @Column(name = "So_mensaje", columnDefinition = "TEXT", nullable = false)
    private String mensaje;

    @Column(name = "So_estado", length = 50)
    private String estado;

    @Column(name = "So_fecha")
    private LocalDateTime fecha;

    public Soporte(int idSoporte, Usuarios usuario, String mensaje, String estado, LocalDateTime fecha) {
        this.idSoporte = idSoporte;
        this.usuario = usuario;
        this.mensaje = mensaje;
        this.estado = estado;
        this.fecha = fecha;
    }

    public Soporte() {

    }

    public int getIdSoporte() {return idSoporte;}

    public void setIdSoporte(int idSoporte) {
        this.idSoporte = idSoporte;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }
}
