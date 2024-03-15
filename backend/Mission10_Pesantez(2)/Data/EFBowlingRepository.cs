using Microsoft.EntityFrameworkCore;

namespace Mission10_Pesante_2_.Data
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private BowlingLeagueContext context;

        public EFBowlingRepository(BowlingLeagueContext ctx)
        {
            context = ctx;

        }
        public IEnumerable<Bowler>Bowlers => context.Bowlers.Include(x=>x.Team);

        public IEnumerable<Team> Teams => context.Teams;

        //public Team GetTeamById(int? teamId)
        //{
        //    return context.Teams.Find(teamId);
        //}



    }
}



