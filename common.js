class TelephoneValication {

    // 매개변수 정의.
    constructor(countryNum, agencyNum, firstNum, lastNum) {
        this.countryNum = countryNum;
        this.agencyNum = agencyNum;
        this.firstNum = firstNum;
        this.lastNum = lastNum;
    }

    // 정적메서드 설정.
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
    // 매개변수 정의.
    constructor(mailName, mailDomain) {
        this.mailName = mailName;
        this.MailDomain = mailDomain;
    }

    // 정적메서드 설정.
    static mailNameCheck(mailName) {
        return mailName;
    }
    static mailDomainCheck(mailDomain) {
        return mailDomain;
    }
    static mailCheck(mailName, mailDomain) {
        return this.mailNameCheck(mailName) + "@" + this.mailDmainCheck(mailDomain);
    }
}

class DataList {
    constructor(data) {
        this.data = data;
    }
    static component(data) {
        let html = '';
        let dataStudent = Object.values(data.student);

        dataStudent.forEach(Element => {
            html += `<tr>` + `\n`;
            html += `    <td>` + Element.num + `</td>` + `\n`;
            html += `    <td>` + Element.name + `</td>` + `\n`;
            html += `    <td>` + Element.school + `</td>` + `\n`;
            html += `    <td>` + Element.level + `</td>` + `\n`;
            html += `    <td>` + Element.address + `</td>` + `\n`;
            html += `    <td>` + Element.teacher + `</td>` + `\n`;
            html += `    <td>` + `\n`;
            html += `        <div class='row'>` + `\n`;
            html += `            <div class='col-sm'>` + `\n`;
            html += `                <textarea class='form-control` + Element.memo + `</textarea>` + `\n`;
            html += `            </div>` + `\n`;
            html += `        </div>` + `\n`;
            html += `    </td>` + `\n`;
            html += `    <td>` + `\n`;
            html += `        <button class='btn' data-code='` + Element.code + `</button>` + `\n`;
            html += `    </td>` + `\n`;
            html += `</tr>` + `\n`;
        });

        let list = document.getElementById('student');
        return list.insertAdjacentHTML('beforeend', html);
    }
}

class FormData {
    constructor(target, data) {
        this.target = target;
        this.data = data;
    }
}

class SelectComponent {
    constructor(target, data, code) {
        this.target = target;
        this.data = data;
        this.code = code;
    }

    static getSelectReset(target) {
        let t = document.getElementById(target);
        for (let i = 0; i < t.options.length; i++) t.options[i] = null;
        t.options.length = 0;
    }

    static component(target, data, code) {

        SelectComponent.getSelectReset(target); //기존 데이터 삭제

        let html = '';

        if (Array.isArray(data)) {
            data.forEach(Element => {
                html += `<option>` + Element + `</option>`;
            });
        } else {
            let dataStudent = Object.values(data.student);
            dataStudent.forEach(Element => {
                if (Element.code == code) html += `<option selected>` + Element[target] + `</option>`;
                else html += `<opton>` + Element[target] + `</opton>`;
            });
        }

        let selectDiv = document.getElementById(target);
        return selectDiv.insertAdjacentHTML('beforeend', html);
    }

    static showSelectedOptons = options => {
        let r = [...optoins].filter(o.selected).map(o => o.values).toString();
    }

    inputData(target, data, code) {
        document.getElementById('target');
    }

}

/* 
const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange == function () {
    if (this.readyState == 4 && this.status == 200) {
        var studentData = JSON.parse(this.responseText);
        console.log(studentData);
    }
}

xmlhttp.open("GET", "./data.json", true);
xmlhttp.send();

let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    let layerPopup = document.getElementsByClassName('modal');
    layerPopup.classList.toggle('active');
});
 */


let data = document.getElementById('data').innerHTML;
let studentData = JSON.parse(data);

DataList.component(studentData);

let buttons = document.querySelectorAll('#student .btn');
let closePopup = document.querySelector('.modal .close');
let layerPopup = document.getElementById('modalPopup');
let modifyInfo = document.getElementById('modifyInfo');

buttons.forEach(item => {
    item.addEventListener('click', event => {
        SelectComponent.component('school', studentData.school, item.dataset.code);
        SelectComponent.component('teacher', studentData, item.dataset.code);
        SelectComponent.component('name', studentData, item.dataset.code);

        if (layerPopup.classList.contains('active')) {
            layerPopup.classList.remove('active');
            if (layerPopup.classList.toggle('active') == false) {
                layerPopup.classList.add('active');
            }
        } else {
            layerPopup.classList.toggle('active');
        }
    });
});

closePopup.addEventListener('click', event => {
    layerPopup.classList.toggle('active');
});
