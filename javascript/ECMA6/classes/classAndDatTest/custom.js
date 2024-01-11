class TelephoneValidation {
    constructor(countryNum, agencyNum, firstNum, lastNum) {
        this.countryNum = countryNum;
        this.agencyNum = agencyNum;
        this.firstNum = firstNum;
        this.lastNum = lastNum;
    }

    static phoneCountryCheck(countryNum) {
        return countryNum;
    }
    static phoneAgencyCheck(agencyNum) {
        return agencyNum;
    }
    static phoneFirstCheck(firstNum) {
        return firstNum;
    }
    static phoneLastNumCheck(lastNum) {
        return lastNum;
    }
}

class EmailValidation {
    constructor(mailName, mailDomain) {
        this.mailName = mailName;
        this.mailDomain = mailDomain;
    }

    static mailNameCheck(mailName) {
        return mailName;
    }

    static mailDomainCheck(mailDomain) {
        return mailDomain;
    }

    static mailDomainCheck(mailName, mailDomain) {
        return this.mailNameCheck(mailName) + '@' + this.mailDomainCheck(mailDomain);
    }
}

class DataList {
    constructor(data) {
        this.data = data;
    }
    static component(data) {
        let html = ``;
        let dataStudent = Object.values(data.student);

        dataStudent.forEach(element => {
            html += `<tr>` + `\n`;
            html += `    <td>` + element.num + `</td>` + `\n`;
            html += `    <td>` + element.name + `</td>` + `\n`;
            html += `    <td>` + element.school + `</td>` + `\n`;
            html += `    <td>` + element.level + `</td>` + `\n`;
            html += `    <td>` + element.address + `</td>` + `\n`;
            html += `    <td>` + element.teacher + `</td>` + `\n`;
            html += `    <td>` + `\n`;
            html += `        <div class="row">` + `\n`;
            html += `            <div class="col-sm">` + `\n`;
            html += `                <textarea class="form-control">` +element.memo
        })
    }
}










