package pe.edu.upc.apisanisidro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.apisanisidro.entities.PropiedadFoto;

@Repository
public interface PropiedadFotoRepository extends JpaRepository<PropiedadFoto, Integer> {
}