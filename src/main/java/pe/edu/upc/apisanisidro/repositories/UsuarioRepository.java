package pe.edu.upc.apisanisidro.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.apisanisidro.entities.Usuarios;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuarios, Integer> {
    @Query("SELECT u FROM Usuarios u WHERE u.nombreUsuario LIKE %:nombre%")
    List<Usuarios> buscaPorNombre(@Param("nombre") String nombre);

    @Query(value = "SELECT rol, COUNT(*) FROM usuario GROUP BY rol", nativeQuery = true)
    List<String[]> cantidadUsuariosPorRol();
}
