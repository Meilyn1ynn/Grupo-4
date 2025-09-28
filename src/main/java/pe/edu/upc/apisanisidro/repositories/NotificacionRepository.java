package pe.edu.upc.apisanisidro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.apisanisidro.entities.Notificacion;
import java.util.List;

@Repository
public interface NotificacionRepository extends JpaRepository<Notificacion, Integer> {

    @Query(value = "SELECT u.nombre, COUNT(*) FROM notificacion n JOIN usuario u ON n.usuario_id = u.id GROUP BY u.nombre", nativeQuery = true)
    List<String[]> cantidadNotificacionesPorUsuario();
}

