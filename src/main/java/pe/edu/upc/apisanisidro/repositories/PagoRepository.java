package pe.edu.upc.apisanisidro.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.apisanisidro.entities.Pago;

import java.util.List;

@Repository
public interface PagoRepository extends JpaRepository<Pago, Integer> {

    @Query(value = "SELECT u.nombre, SUM(p.monto) FROM pago p JOIN usuario u ON p.propietario_id = u.id GROUP BY u.nombre", nativeQuery = true)
    List<String[]> ingresosTotalesPorPropietario();
}