# SAP UI5 Demo Custom Formatters


A formatter function has a single parameter, which is the value which needs to be formatted to an external representation. A formatter function can be used not only to format a value, but also to do type conversion or calculate results from a given value.

### Code Explaination


Refer to [/webapp/model/formatter.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Custom-Formatters/blob/master/webapp/model/formatter.js "formatter.js")

The module exports an object with a single method `myStatusText` that takes a string parameter `sStatus`. The method returns a string value based on the input parameter `sStatus`.

The `oResourceBundle` variable is assigned the value of the `i18n` model's resource bundle. The `getResourceBundle()` method is called on the `i18n` model, which is obtained from the `OwnerComponent` of the current view. The `getText()` method is called on the `oResourceBundle` object to retrieve the text associated with the given key.

The `switch` statement is used to determine the value of the `sStatus` parameter and return the corresponding text from the resource bundle. If the value of `sStatus` is not "A", "B", or "C", then the value of `sStatus` is returned as is.

This code is used to define a reusable function that can be called from any other module in the application. It is a good practice to define such functions in a separate module to keep the code organized and modular.



Refer to [/webapp/controller/InvoicesList.controller.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Custom-Formatters/blob/master/webapp/controller/InvoicesList.controller.js "InvoicesList.controller.js")

The `formatter` property of the controller is set to the `formatter` object that is imported from the `../model/formatter` module. This object contains the formatter functions that are used to format the data in the view.



Refer to [/webapp/view/InvoicesList.view.xml](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Custom-Formatters/blob/master/webapp/view/InvoicesList.view.xml "InvoicesList.view.xml")

The `ObjectListItem` control is used to display each invoice as a list item. The `firstStatus` aggregation of the `ObjectListItem` control is used to display the status of the invoice.

The `ObjectStatus` control is used to display the status text of the invoice. The `text` property of the `ObjectStatus` control is bound to the `Status` property of the invoice model using the `path` property. The `formatter` property is used to specify the name of the formatter function that is used to format the status text.

The formatter function is defined in the `formatter.js` file of the application. The `formatter.myStatusText` function is called to format the status text. The `myStatusText` function takes the `Status` property of the invoice model as input and returns the corresponding text from the resource bundle.

In summary, the code you provided is used to display a list of invoices with their status text formatted using a formatter function.

---

[![Vaibhav Mojidra - 1.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Custom-Formatters/master/screenshot/1.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)