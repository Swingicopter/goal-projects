fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())            
            .then(product => {
                let div = document.createElement('div');
                div.className = "product"

                let img = document.createElement('img')
                img.src = product.image
                img.alt = product.title
                img.width = 200

                let title = document.createElement('div')
                title.className = "title"
                title.textContent = product.title

                let price = document.createElement('div')
                price.className = "price"
                price.textContent = '$' + product.price

                let button = document.createElement('button')
                button.textContent = "ADD TO CART"

                let purchaseDiv = document.createElement('div')
                purchaseDiv.className = "purchase"

                purchaseDiv.append(price)
                purchaseDiv.append(button)
                
                div.append(title)
                div.append(img)
                div.append(purchaseDiv)
                document.body.append(div)

            })
