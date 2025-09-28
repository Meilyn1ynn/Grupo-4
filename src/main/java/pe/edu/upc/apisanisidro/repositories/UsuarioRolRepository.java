package pe.edu.upc.apisanisidro.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.apisanisidro.entities.UsuarioRol;
import java.util.List;

@Repository
public interface UsuarioRolRepository extends JpaRepository<UsuarioRol, Integer> {

    @Query(value = "SELECT r.nombre, COUNT(*) FROM usuario_rol ur JOIN rol r ON ur.rol_id = r.id GROUP BY r.nombre", nativeQuery = true)
    List<String[]> cantidadUsuariosPorRol();
}
