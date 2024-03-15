namespace Mission10_Pesante_2_.Data
{
    public interface IBowlingRepository
    {

        IEnumerable<Bowler> Bowlers { get; }
        IEnumerable<Team> Teams { get; }


        //Team GetTeamById(int? teamId);
    }
}