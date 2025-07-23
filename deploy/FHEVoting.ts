import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployFHEVoting: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const result = await deploy("FHEVoting", {
    from: deployer,
    args: [],
    log: true,
  });

  console.log(`✅ FHEVoting deployed at: ${result.address}`);
};

export default deployFHEVoting;
deployFHEVoting.tags = ["FHEVoting"];
