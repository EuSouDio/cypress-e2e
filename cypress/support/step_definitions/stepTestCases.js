import TestCases from "../Pages/TestCases";

When(/^Quando eu clicar no botão test Cases$/, () => {
	TestCases.clickbutonTestCases()
});

Then(/^Devo estar na pagina de test cases$/, () => {
	TestCases.validateTestCasePage()
});