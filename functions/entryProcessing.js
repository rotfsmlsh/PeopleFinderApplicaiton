import { handleApolloIo } from '../siteProcessors/peopleSearchEngines/ApolloIOProcessor.js'
import { handleBeenVerified } from '../siteProcessors/peopleSearchEngines/BeenVerifiedProcessor.js'
import { handleInstantCheckmate } from '../siteProcessors/peopleSearchEngines/InstantCheckmateProcessor.js'
import { handleIntelius } from '../siteProcessors/peopleSearchEngines/InteliusProcessor.js'
import { handleLexisNexis } from '../siteProcessors/peopleSearchEngines/LexisNexisProcessor.js'
import { handleMyLife } from '../siteProcessors/peopleSearchEngines/MyLifeProcessor.js'
import { handlePeekYou } from '../siteProcessors/peopleSearchEngines/PeekYouProcessor.js'
import { handlePipl } from '../siteProcessors/peopleSearchEngines/PiplProcessor.js'
import { handleSpokeo } from '../siteProcessors/peopleSearchEngines/SpokeoProcessor.js'
import { handleTruthFinder } from '../siteProcessors/peopleSearchEngines/TruthfinderProcessor.js'
import { handleUSSearch } from '../siteProcessors/peopleSearchEngines/USSearchProcessor.js'
import { handleWhitepages } from '../siteProcessors/peopleSearchEngines/WhitepagesProcessor.js'
 
import { handleAcxiom } from '../siteProcessors/dataBrokers/AcxiomProcessor.js'
import { handleCoreLogic } from '../siteProcessors/dataBrokers/CoreLogicProcessor.js'
import { handleEpsilonDM } from '../siteProcessors/dataBrokers/EpsilonDataManagementProcessor.js'
import { handleEquifaxInformationServices } from '../siteProcessors/dataBrokers/EquifaxInformationServicesProcessor.js'
import { handleExperian } from '../siteProcessors/dataBrokers/ExperianProcessor.js'
import { handleOracleAmerica } from '../siteProcessors/dataBrokers/OracleAmericaProcessor.js'


class UserInputFields{
    constructor(fName, lName, middle, emailAddress, streetNum, streetName, streetType, phoneNum, city, state, zip){
        this.fName = fName;
        this.lName = lName;
        this.middle = middle;
        this.emailAddress = emailAddress;
        this.streetNum = streetNum;
        this.streetName = streetName;
        this.streetType = streetType;
        this.phoneNum = phoneNum;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}

function processEntries(){
    //create a new UserInputFields object and pass it to each of the processors
    var inputFields = new UserInputFields()
    let resultArray;
    //add the people search engines
    resultArray.push(handleApolloIo(inputFields))
    resultArray.push(handleBeenVerified(inputFields))
    resultArray.push(handleInstantCheckmate(inputFields))
    resultArray.push(handleIntelius(inputFields))
    resultArray.push(handleLexisNexis(inputFields))
    resultArray.push(handleMyLife(inputFields))
    resultArray.push(handlePeekYou(inputFields))
    resultArray.push(handlePipl(inputFields))
    resultArray.push(handleSpokeo(inputFields))
    resultArray.push(handleTruthFinder(inputFields))
    resultArray.push(handleUSSearch(inputFields))
    resultArray.push(handleWhitepages(inputFields))

    //handle the data brokers
    resultArray.push(handleAcxiom(inputFields))
    resultArray.push(handleCoreLogic(inputFields))
    resultArray.push(handleEpsilonDM(inputFields))
    resultArray.push(handleEquifaxInformationServices(inputFields))
    resultArray.push(handleExperian(inputFields))
    resultArray.push(handleOracleAmerica(inputFields))
}
