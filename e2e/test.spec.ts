import { Selector, t } from "testcafe";
import DateFormat from "dateformat";

fixture`My fixture`.page('https://devexpress.github.io/testcafe/example');

test("My test", async () => {
    const myElementSel = Selector("#developer-name");
    await t.expect(myElementSel.innerText).contains(DateFormat(new Date(), "yyyy-mm-dd"));
});
