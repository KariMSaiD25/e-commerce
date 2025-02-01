/* eslint-disable react/prop-types */
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

function IconSection() {
  return (
    <Container>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={0.1}
         flexWrap={'wrap'}
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlinedIcon fontSize="large" />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlinedIcon fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
}

function MyBox({ icon, title, subTitle }) {
  const theme = useTheme();
  return (
    <Box
      
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      sx={{ width: { md: "calc(99%/4)", xs: "100%" } ,p:2}}
      bgcolor={theme.palette.sidebar.main}
      
    >
      {icon}
      <Box>
        <Typography variant="body" fontWeight={500} color="inherit">
          {title}
        </Typography>
        <Typography variant="body1" color={theme.palette.neutral.main}>
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default IconSection;
