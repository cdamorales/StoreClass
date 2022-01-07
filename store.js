import moment from 'moment'

const Store = class {
    constructor(incidents,name) {
        this.incidents = incidents;
        this.name=name;
    }

    incidente_status = (start_date, finish_date) => {
        let result={
            open_cases:0,
            solved_cases:0,
            average_solution:0,
            maximun_solution:0,
        }
        start_date=moment(new Date(start_date), "YYYY-MM-DD HH:MM:ss");
        finish_date=moment(new Date(finish_date), "YYYY-MM-DD HH:MM:ss");
        let current_date=moment(new Date(), "YYYY-MM-DD HH:MM:ss");
        this.incidents.map((incident)=>{
            let open_date=incident.open_date?moment(new Date(incident.open_date), "YYYY-MM-DD HH:MM:ss"):null;
            let solved_date=incident.solved_date?moment(new Date(incident.solved_date), "YYYY-MM-DD HH:MM:ss"):null;
            if(open_date  && open_date.isBetween(start_date,finish_date)){
                result.open_cases++;
                if(incident.status==="open"){
                    let solution_time=current_date.diff(open_date,"hours");
                    result.maximun_solution=result.maximun_solution<solution_time?solution_time:result.maximun_solution;
                }
            } 
            if(solved_date && incident.status==="solved" && solved_date.isBetween(start_date,finish_date)){
                result.solved_cases++;
                let solution_time=solved_date.diff(open_date,"hours");
                result.average_solution+=solution_time;
                result.maximun_solution=result.maximun_solution<solution_time?solution_time:result.maximun_solution;
            }

        });

        result.average_solution= result.solved_cases>0 ?parseInt(result.average_solution/result.solved_cases):0
        return  result;
    }

}

export default Store;