// Configura la visualización de Power BI que se mostrará
var config = {
    type: 'report',
    tokenType: models.TokenType.Embed,
    accessToken: '<inserta tu token de acceso aquí>',
    embedUrl: '<inserta la URL de la visualización embebida de Power BI aquí>',
    id: '<inserta el ID de la visualización de Power BI aquí>',
    settings: {
        filters: []
    }
};

// Carga la visualización de Power BI
var reportContainer = document.getElementById('reportContainer');
var report = powerbi.embed(reportContainer, config);

// Añade un event listener al botón toggle
var toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function() {
    // Actualiza la visualización para mostrar la columna A
    report.updateSettings({
        filterPaneEnabled: false,
        filters: [
            {
                target: {
                    table: '<inserta el nombre de la tabla aquí>',
                    column: '<inserta el nombre de la columna aquí>'
                },
                operator: "In",
                values: ["A"]
            }
        ]
    });
});