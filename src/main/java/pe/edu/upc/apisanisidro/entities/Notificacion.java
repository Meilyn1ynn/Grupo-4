package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "notificaciones")
public class Notificacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "Us_id", nullable = false)
    private Usuarios usuario;

    @Column(name = "No_titulo", length = 150)
    private String titulo;

    @Column(name = "No_mensaje", columnDefinition = "TEXT")
    private String mensaje;

    @Column(name = "No_fecha")
    private LocalDateTime fecha;

    @Column(name = "No_leida", length = 50)
    private String leida;

    public Notificacion(int id, Usuarios usuario, String titulo, String mensaje, LocalDateTime fecha, String leida) {
        this.id = id;
        this.usuario = usuario;
        this.titulo = titulo;
        this.mensaje = mensaje;
        this.fecha = fecha;
        this.leida = leida;
    }

    public Notificacion() {

    }

    public int getId() {return id;}

    public void setId(int id) {
        this.id = id;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }

    public String getLeida() {
        return leida;
    }

    public void setLeida(String leida) {
        this.leida = leida;
    }
}
