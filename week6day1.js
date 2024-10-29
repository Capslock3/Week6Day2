$(document).ready(function() {
    const products = [
        { price: 800, name: "TV", description: "4K Ultra HD", inStock: true },
        { price: 300, name: "Game Console", description: "The latest and greatest", inStock: true },
        { price: 1200, name: "Laptop", description: "16GB RAM 1TB SSD", inStock: true },
        { price: 100, name: "Headphones", description: "Clearest music to be heard", inStock: true },
        { price: 100, name: "Keyboard", description: "Types for you", inStock: true },
        { price: 100, name: "HDMI Cord", description: "HDMI to USB type C", inStock: true },
        { price: 300, name: "Monitor", description: "4K Ultra HD", inStock: true },
        { price: 200, name: "Speaker", description: "Clearest music to be heard", inStock: true },
        { price: 60, name: "Video Game", description: "Enjoy for hours", inStock: true },
    ];

    
    function populateTable() {
        const table = $('#productTable');
        let tableContent = `
            <tr>
                <th>Price</th>
                <th>Product</th>
                <th>Description</th>
            </tr>
        `;

        products.forEach(product => {
            if (product.inStock) {
                tableContent += `
                    <tr>
                        <td>$${product.price}</td>
                        <td>${product.name}</td>
                        <td>${product.description}</td>
                    </tr>
                `;
            }
        });

        table.html(tableContent);
    }

    
    function toggleDarkMode() {
        $('body').toggleClass('dark-mode');
    }

   
    populateTable();

    
    $('#toggleMode').click(function() {
        toggleDarkMode();
    });
});
