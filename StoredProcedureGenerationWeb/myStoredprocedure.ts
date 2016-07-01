declare var global: any;

import {Utilitary} from "Utilitary"

//declare entry point for stored procedure execution
var execute = (context: IContext, args: any[]) => {
    var ctx = getContext();
    var coll = ctx.getCollection();
    var response = ctx.getResponse();

    var total = Utilitary.sumValues([1, 2, 3, 4, args[0], args[1]]);
    response.setBody("Total: " + total + "-arg0: " + args[0] +"-arg1: " + args[1]);
}

var context: IContext = getContext();
var procedureArgs: any[] = (<any>global).storedProcedureArgs;

//execute stored procedure.
execute(context, procedureArgs);
