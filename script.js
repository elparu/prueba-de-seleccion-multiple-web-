import java.util.HashMap;
import java.util.Map;

public class SoftwareLibreService {

    // Clase interna para representar la herramienta
    public static class Herramienta {
        private String nombre;
        private String descripcion;
        private String imagenUrl;

        public Herramienta(String nombre, String descripcion, String imagenUrl) {
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.imagenUrl = imagenUrl;
        }

        public String getNombre() { return nombre; }
        public String getDescripcion() { return descripcion; }
        public String getImagenUrl() { return imagenUrl; }
    }

    private Map<String, Herramienta> catalogo;

    public SoftwareLibreService() {
        catalogo = new HashMap<>();
        cargarCatalogo();
    }

    private void cargarCatalogo() {
        catalogo.put("1", new Herramienta(
            "LibreOffice Writer",
            "Excelente alternativa libre a Microsoft Word para crear documentos, reportes e informes.",
            "https://upload.wikimedia.org/wikipedia/commons/f/fb/LibreOffice_7.0_Writer_Icon.svg"
        ));
        catalogo.put("2", new Herramienta(
            "GIMP",
            "Programa potente para manipulación de imágenes, retoque fotográfico y composición digital.",
            "https://upload.wikimedia.org/wikipedia/commons/4/45/The_GIMP_icon_-_Wilber_2022.svg"
        ));
        catalogo.put("3", new Herramienta(
            "Audacity",
            "Editor y grabador de audio multipista fácil de usar y muy versátil.",
            "https://upload.wikimedia.org/wikipedia/commons/e/ea/Audacity_Logo_2021.svg"
        ));
        catalogo.put("4", new Herramienta(
            "Inkscape",
            "Herramienta profesional para diseño vectorial (diagramas, logotipos e ilustraciones).",
            "https://upload.wikimedia.org/wikipedia/commons/0/0a/Inkscape_logo_%282019%29.svg"
        ));
    }

    /**
     * Procesa la opción seleccionada. Si no existe, lanza una excepción o retorna null.
     */
    public Herramienta obtenerRecomendacion(String opcion) throws IllegalArgumentException {
        if (!catalogo.containsKey(opcion)) {
            throw new IllegalArgumentException("La opción ingresada no es válida. Por favor, seleccione una opción existente del menú.");
        }
        return catalogo.get(opcion);
    }
}
