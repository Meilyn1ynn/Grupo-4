package pe.edu.upc.apisanisidro.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.apisanisidro.entities.Roles;

import java.util.List;

@Repository
public interface RolesRepository extends JpaRepository<Roles, Integer> {
    List<Roles> busca(String nombre);
}