import { Response, Request } from 'express'
// import Puppeteer from 'puppeteer'

const pup = require('puppeteer')

export const index = (req: Request, res: Response) => {

    res.render('pages/page')
}

export const home = (req: Request , res: Response) => {
    let url = "https://censo2010.ibge.gov.br/nomes/#/search"
    let { name } = req.body
    let newName = name[0].toUpperCase() + name.substr(1)
    console.log(name)
    if(name.length <= 2) {
        return res.redirect('/')
    }
    ;( async()=> {
        const browser = await pup.launch() // , slowMo : 950
        const searchFor = name
        const page = await browser.newPage()
        // console.log("INICIEI")

        await page.goto(url, { timeout: 0})
        // await page.screenshot({ path: 'example.png' });
        // console.log("FUI PRA URL")

        // await page.waitForSelector('.pure-menu-link')
        // await page.click('.pure-menu-link')
        await page.waitForSelector('input[ng-model="criteria.nome"]')
        
        await page.type('input[ng-model="criteria.nome"]' , searchFor)
        console.log("DIGITEI")
        await page.click('.button-wrapper button')
        console.log("CLIQUEI")

        await page.waitForSelector('.item-note.ng-binding')

        
          
        let dados = await page.evaluate(  () => {
            
            let nodeList = document.querySelectorAll('.item-note.ng-binding')
            // [ qtPessoas, porcentagem, rankingName, estadoComMaisNomes, taxaPor100Mil ] = array
            let array = [... nodeList]
            console.log(array[0].innerHTML)

            let nomesEstados = {
                emNomeEstado : false,
                noNomeEstado : false,
                naNomeEstado : false,
                deNomeEstado : false,
                doNomeEstado: false,
                daNomeEstado: false
            }
            
            let estado = array[3].innerHTML
            switch (estado) {
                case 'Alagoas': 
                case 'São Paulo': 
                case 'Goiás': 
                case 'Mato Grosso': 
                case 'Mato Grosso do Sul': 
                case 'Minas Gerais': 
                case 'Pernambuco': 
                case 'Rondônia': 
                case 'Roraima': 
                case 'Santa Catarina': 
                case 'Tocantis': 
                    nomesEstados.emNomeEstado = true
                    break;
                case 'Amapá': 
                case 'Amazonas': 
                case 'Espírito Santo': 
                case 'Acre': 
                case 'Ceará': 
                case 'Distrito Federal': 
                case 'Maranhão': 
                case 'Pará': 
                case 'Paraná': 
                case 'Piauí': 
                case 'Rio de Janeiro': 
                case 'Rio Grande do Norte': 
                case 'Rio Grande do Sul': 
                case 'Sergipe': 
                    nomesEstados.noNomeEstado = true
                    break;
                case 'Bahia': 
                case 'Paraíba':  
                    nomesEstados.naNomeEstado = true
                    break;
                default:
                    break;
            }

            switch (estado) {
                case 'Alagoas': 
                case 'São Paulo': 
                case 'Goiás': 
                case 'Minas Gerais': 
                case 'Rondônia': 
                case 'Roraima': 
                case 'Santa Catarina': 
                case 'Sergipe': 
                    nomesEstados.deNomeEstado = true
                    break;
                case 'Amapá': 
                case 'Amazonas': 
                case 'Acre': 
                case 'Ceará': 
                case 'Distrito Federal': 
                case 'Espírito Santo': 
                case 'Maranhão': 
                case 'Mato Grosso': 
                case 'Mato Grosso do Sul': 
                case 'Pará': 
                case 'Piauí': 
                case 'Paraná':
                case 'Pernambuco':
                case 'Rio de Janeiro': 
                case 'Rio Grande do Norte': 
                case 'Rio Grande do Sul': 
                case 'Tocantis': 
                    nomesEstados.doNomeEstado = true
                    break;
                case 'Bahia': 
                case 'Paraíba':  
                    nomesEstados.daNomeEstado = true
                    break;
                default:
                    break;
            }
            let pessoas = array[4].innerHTML.replace('.', '')
            // let pessoas = pessoasString
            let obj =   {
                qt: array[0].innerHTML,
                percentual: array[1].innerHTML,
                popularidade: array[2].innerHTML,
                estadoComMais: array[3].innerHTML,
                aCada100MilNoEstado: parseInt(pessoas),
                nomesEstados
            }
            return obj
              
          });

          let obj = dados
          console.log('Nome:', searchFor)
          console.log('Dados:', obj);


        await browser.close()

        res.render('pages/home', {
            name: newName,
            quantidade: obj.qt,
            popularidade: obj.popularidade,
            estado: obj.estadoComMais,
            aCada100MilNoEstado: obj.aCada100MilNoEstado,
            percentage: obj.percentual,
            nomesEstados: obj.nomesEstados
        })
    })()

    
}