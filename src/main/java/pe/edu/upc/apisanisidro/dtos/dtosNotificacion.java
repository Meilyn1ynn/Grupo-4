package pe.edu.upc.apisanisidro.dtos;

import java.time.LocalDateTime;

public class dtosNotificacion {
    private int idUsuario;
    private String titulo;
    private String mensaje;
    private LocalDateTime fecha;
    private String leida;

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
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
