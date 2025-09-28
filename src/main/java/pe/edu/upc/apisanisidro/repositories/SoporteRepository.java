package pe.edu.upc.apisanisidro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.apisanisidro.entities.Soporte;
import java.util.List;

@Repository
public interface SoporteRepository extends JpaRepository<Soporte, Integer> {

    @Query(value = "SELECT estado, COUNT(*) FROM ticket_soporte GROUP BY estado", nativeQuery = true)
    List<String[]> cantidadTicketsPorEstado();
}