package pe.edu.upc.apisanisidro.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.apisanisidro.entities.Visita;
import java.util.List;

@Repository
public interface VisitaRepository extends JpaRepository<Visita, Integer> {

    @Query(value = "SELECT p.titulo, COUNT(*) FROM visita v JOIN propiedad p ON v.propiedad_id = p.id GROUP BY p.titulo", nativeQuery = true)
    List<String[]> cantidadVisitasPorPropiedad();
}