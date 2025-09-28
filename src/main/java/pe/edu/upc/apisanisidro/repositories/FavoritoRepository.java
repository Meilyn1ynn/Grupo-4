package pe.edu.upc.apisanisidro.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.apisanisidro.entities.Favorito;

import java.util.List;

@Repository
public interface FavoritoRepository extends JpaRepository<Favorito, Integer> {

    @Query(value = "SELECT u.nombre, COUNT(*) FROM favorito f JOIN usuario u ON f.usuario_id = u.id GROUP BY u.nombre", nativeQuery = true)
    List<String[]> cantidadFavoritosPorUsuario();
}
