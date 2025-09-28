package pe.edu.upc.apisanisidro.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContratoRepository<Contrato> extends JpaRepository<Contrato, Integer> {

    @Query(value = "SELECT u.nombre, COUNT(*) FROM contrato c JOIN usuario u ON c.inquilino_id = u.id GROUP BY u.nombre", nativeQuery = true)
    List<String[]> cantidadContratosPorInquilino();
}