import { expect, browser, $ } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://front.serverest.dev/login`)

        await $("[data-testid='email']").setValue('test@test.com')
        await $("[data-testid='senha']").setValue('123456')
        await $("[data-testid='entrar']").click()

        await expect($('.alert-dismissible')).toBeExisting()

    })
})

