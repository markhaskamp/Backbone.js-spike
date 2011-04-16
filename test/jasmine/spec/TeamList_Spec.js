describe("TeamList", function() {

  it("initial list for nl_central is Chi, Cin, Hou, Mil, Pit, StL", function() {
    expect(TeamList.team_list[0]).toEqual("Chicago");
    expect(TeamList.team_list[1]).toEqual("Cincinnati");
    expect(TeamList.team_list[2]).toEqual("Houston");
    expect(TeamList.team_list[3]).toEqual("Milwaukee");
    expect(TeamList.team_list[4]).toEqual("Pittsburgh");
    expect(TeamList.team_list[5]).toEqual("St. Louis");
  });
});

