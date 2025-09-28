package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Table
@Entity(name = "Reseña")
public class Reseña {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idReseña;

    @ManyToOne
    @JoinColumn(name = "Us_autor_id", nullable = false)
    private Usuarios autor;

    @ManyToOne
    @JoinColumn(name = "Us_receptor_id", nullable = false)
    private Usuarios receptor;

    @Column(name = "Re_puntaje", nullable = false)
    private int puntaje;

    @Column(name = "Re_comentario", columnDefinition = "TEXT")
    private String comentario;

    @Column(name = "Re_fecha")
    private LocalDateTime fecha;
}
