using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Mission10_Pesante_2_.Data;

namespace Mission10_Pesante_2_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Bowling : ControllerBase
    {
        private IBowlingRepository _bowlerRepository;

        public Bowling(IBowlingRepository temp)
        {
            _bowlerRepository = temp;
        }

        [HttpGet]
        public  IEnumerable<Bowler> Get() 
        {
            var bowlers = _bowlerRepository.Bowlers
                .Where(x => x.Team.TeamName == "Marlins" ||  x.Team.TeamName == "Sharks").ToArray();
            


            return bowlers;        
                    
      }
            
            

    }


}



