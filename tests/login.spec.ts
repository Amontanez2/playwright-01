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

// clic en ordenar ascendentemente 
    await page.getByTestId("sort").selectOption({label:'Nombre (A - Z)'});


});

