import { test, expect } from '@playwright/test';

// Paso 1: abrir la URL
test("TCO1 - Longin  Happy Path", async({page})=>{
    await page.goto("https://practicesoftwaretesting.com/")
    // validar que  el titulo corresponda a la pagina 
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0")

    // Paso 2: Clic en iniciar sesion
    await page.getByTestId("nav-sign-in").click();
// Paso 3: Llenar usuario y Password
    await page.getByTestId("email").fill("customer@practicesoftwaretesting.com");
    await page.getByTestId("password").fill("welcome01");
// Paso 4: Clic en boton iniciar sesion 
    await page.getByTestId("login-submit").click();

// Paso 5: Validar que he llegado a la pantalla de Home 
// page.title= My account

     await expect(page.getByTestId("page-title")).toContainText("Mi cuenta");

// clic en boton de inicio 

    await page.getByTestId("nav-home").click();

// obtener la lista al dar clic en el boton de inicio

    const itemsAntes = page.getByTestId("product-name")
    await expect(itemsAntes.first()).not.toHaveText('');
    const primerTextoInicial = await itemsAntes.first().innerText();
    console.log(primerTextoInicial);



// clic en ordenar ascendentemente 
    await page.getByTestId("sort").selectOption({label:'Nombre (A - Z)'})

// validar

const items = page.getByTestId("product-name")

await expect(items.first()).not.toHaveText('primerTextoInicial');

const nombreProductos = await items.allTextContents();
console.log(nombreProductos);   

// validar que se hayan ordenado correctamente

// 1. Obtienes los textos de la pagina (limpios de espacio)
const actualTitles = (await items.allTextContents()).map(text => text.trim());

// 2. Creas una copia del arreglo y la ordenas alfabeticamente
const expectedTitles = [...actualTitles].sort((a, b) => a.localeCompare(b));

// 3. Validas que el arreglo original sea identico al arreglo ordenado  
expect(actualTitles).toEqual(expectedTitles);




});

