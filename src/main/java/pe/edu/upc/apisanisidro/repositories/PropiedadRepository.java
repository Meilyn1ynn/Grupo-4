package pe.edu.upc.apisanisidro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pe.edu.upc.apisanisidro.entities.Propiedad;

import java.util.List;

public interface PropiedadRepository extends JpaRepository<Propiedad, Integer> {
    @Query("SELECT p FROM Propiedad p WHERE p.titulo LIKE %:titulo%")
    List<Propiedad> buscaPorTitulo(@Param("titulo") String titulo);

    @Query(value = "SELECT u.nombre, COUNT(*) FROM propiedad p JOIN usuario u ON p.usuario_id = u.id GROUP BY u.nombre", nativeQuery = true)
    List<String[]> cantidadPropiedadesPorUsuario();
}
