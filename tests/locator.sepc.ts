import {test,expect} from "@playwright/test"

test("TC01 - Login usando distintos locators",async({page})=>{
    // Paso 1: Abrir la URL
    await page.goto("https://practicesoftwaretesting.com/");
    // VAlidar que el título corresponda a la página que he abierto
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
    
    // Paso 2: Clic en "Iniciar Sesión"
    await page.getByTestId("nav-sign-in").click();
    // Paso 3: Llenar Usuario y Password
    await page.getByTestId("email").fill("customer@practicesoftwaretesting.com");
    // Xpath
    //await page.locator('//label[contains(text(), "Dirección de correo electrónico")]/following-sibling::input').fill("customer@practicesoftwaretesting.com");
    
    // CSS
    //await page.locator('input.form-control.ng-invalid').fill("customer@practicesoftwaretesting.com");
    
    // ByLabel
    // await page.getByLabel('Dirección de correo electrónico *').fill("customer@practicesoftwaretesting.com");
    
    // Placeholder
    //await page.getByPlaceholder('Tu correo electrónico').fill("customer@practicesoftwaretesting.com");
    
    await page.getByTestId("password").fill("welcome01");
    // Paso 4: Clic botón Iniciar Sesión-
    await page.getByTestId("login-submit").click();
    // Por getByText
    // await page.getByText('Iniciar sesión').click();
    // Por Role (por Aria Label)
    // await page.getByRole('button', { name: 'Login' }).click();
    // Por Role (si no tuviera Aria Label se puede el texto)
    // await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    
    // Paso 5: Validar que he lleg
    // ado a la pantalla de Home
    // page-title=My account
    await expect(page.getByTestId("page-title")).toContainText("Mi cuenta");
    // Por role - heading
    // await expect(page.getByRole('heading', { name: 'Mi cuenta' })).toBeVisible();

});

// Xpath
    //await page.locator('//label[contains(text(), "Dirección de correo electrónico")]/following-sibling::input').fill("customer@practicesoftwaretesting.com");
    // CSS
    //await page.locator('input.form-control.ng-invalid').fill("customer@practicesoftwaretesting.com");
    // ByLabel
    //await page.getByLabel('Dirección de correo electrónico *').fill("customer@practicesoftwaretesting.com");
    // Placeholder
    //await page.getByPlaceholder('Tu correo electrónico').fill("customer@practicesoftwaretesting.com");
    // Por getByText
    //await page.getByText('Iniciar sesión').click();
    // Por Role (por Aria Label)
    // await page.getByRole('button', { name: 'Login' }).click();
    // Por Role (si no tuviera Aria Label se puede el texto)
    //await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    // Por role - heading
    // await expect(page.getByRole('heading', { name: 'Mi cuenta' })).toBeVisible();